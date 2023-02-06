import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from './TextInput';
import Button from './Button';
import {colors} from '../constants/colors';
import {useSelector} from 'react-redux';
import {selectExpenses} from '../redux/expensesSlice';

const ExpenseForm = ({id, titleSubmitButton, onSubmit, onCancel}) => {
  const expense = useSelector(selectExpenses).find(
    expense => expense.id === id,
  );

  const [inputs, setInputs] = useState({
    amount: {
      value: expense ? expense.amount.toString() : '',
      isValid: true,
    },
    date: {
      valueYear: expense ? expense.date.split('-')[0] : '',
      valueMonth: expense ? expense.date.split('-')[1] : '',
      valueDate: expense ? expense.date.split('-')[2] : '',
      isValid: true,
    },
    description: {
      value: expense ? expense.description : '',
      isValid: true,
    },
  });

  const submitHandler = () => {
    const description = inputs.description.value;
    const amount = parseFloat(inputs.amount.value);
    const valueYear = inputs.date.valueYear;

    const valueMonth =
      inputs.date.valueMonth?.length === 1
        ? '0' + inputs.date.valueMonth
        : inputs.date.valueMonth;

    const valueDate =
      inputs.date.valueDate?.length === 1
        ? '0' + inputs.date.valueDate
        : inputs.date.valueDate;

    const date = valueYear + '-' + valueMonth + '-' + valueDate;

    const isAmountValid = amount > 0;
    const isDateValid = new Date(date).toString() !== 'Invalid Date';
    const isDescriptionValid = description.trim().length > 0;
    let isValid = isAmountValid && isDateValid && isDescriptionValid;
    if (isValid) {
      onSubmit({
        description: description,
        amount: amount,
        date: date,
      });
    } else {
      setInputs(
        JSON.parse(
          JSON.stringify({
            amount: {
              value: isAmountValid ? inputs['amount']['value'] : '',
              isValid: isAmountValid,
            },
            date: {
              valueYear: isDateValid ? inputs['date']['valueYear'] : '',
              valueMonth: isDateValid ? inputs['date']['valueMonth'] : '',
              valueDate: isDateValid ? inputs['date']['valueDate'] : '',
              isValid: isDateValid,
            },
            description: {
              value: isDescriptionValid ? inputs['description']['value'] : '',
              isValid: isDescriptionValid,
            },
          }),
        ),
      );
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Your expense</Text>
        <View style={styles.formContainer}>
          <View style={styles.amountDateContainer}>
            <View style={styles.amountContainer}>
              <TextInput
                configInput={{
                  keyboardType: 'decimal-pad',
                  value: inputs.amount.value,
                  onChangeText: text => {
                    setInputs(prevInputs => {
                      return {
                        ...prevInputs,
                        amount: {
                          ...prevInputs['amount'],
                          value: text,
                        },
                      };
                    });
                  },
                }}
                isValid={inputs.amount.isValid}
                title="Amount"
              />
            </View>
            <View style={styles.dateContainer}>
              <TextInput
                configInput={{
                  maxLength: 4,
                  keyboardType: 'number-pad',
                  value: inputs.date.valueYear,
                  onChangeText: text => {
                    setInputs(prevInputs => {
                      return {
                        ...prevInputs,
                        date: {
                          ...prevInputs['date'],
                          valueYear: text,
                        },
                      };
                    });
                  },
                }}
                style={styles.dateInputs}
                title="Year"
                isValid={inputs.date.isValid}
              />
              <TextInput
                configInput={{
                  maxLength: 2,
                  keyboardType: 'number-pad',
                  value: inputs.date.valueMonth,
                  onChangeText: text => {
                    setInputs(prevInputs => {
                      return {
                        ...prevInputs,
                        date: {
                          ...prevInputs['date'],
                          valueMonth: text,
                        },
                      };
                    });
                  },
                }}
                style={styles.dateInputs}
                title="Month"
                isValid={inputs.date.isValid}
              />
              <TextInput
                configInput={{
                  maxLength: 2,
                  keyboardType: 'number-pad',
                  value: inputs.date.valueDate,
                  onChangeText: text => {
                    setInputs(prevInputs => {
                      return {
                        ...prevInputs,
                        date: {
                          ...prevInputs['date'],
                          valueDate: text,
                        },
                      };
                    });
                  },
                }}
                style={styles.dateInputs}
                title="Date"
                isValid={inputs.date.isValid}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <TextInput
              configInput={{
                value: inputs.description.value,
                onChangeText: text => {
                  setInputs(prevInputs => {
                    return {
                      ...prevInputs,
                      description: {
                        ...prevInputs['description'],
                        value: text,
                      },
                    };
                  });
                },
              }}
              style={styles.descriptionInput}
              title="Description"
              isValid={inputs.description.isValid}
            />
          </View>
          {!inputs.amount.isValid ||
          !inputs.description.isValid ||
          !inputs.date.isValid ? (
            <View style={styles.errorTextContainer}>
              <Text style={styles.errorText}>
                Invalid input values - please check your entered data!
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.cancelButton}
          title="Cancel"
          color={colors.primary50}
          onPress={onCancel}
        />
        <Button
          style={styles.submitButton}
          title={titleSubmitButton}
          color={colors.primary800}
          onPress={submitHandler}
        />
      </View>
    </>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  amountDateContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  amountContainer: {
    flex: 1,
  },
  dateContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 2,
  },
  dateInputs: {
    flex: 1,
    marginLeft: 5,
  },
  descriptionInput: {},
  cancelButton: {
    backgroundColor: colors.primary800,
  },
  submitButton: {backgroundColor: colors.primary50},
  buttonsContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: colors.primary50,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  errorTextContainer: {
    marginTop: 15,
  },
  errorText: {
    color: colors.error500,
  },
});
