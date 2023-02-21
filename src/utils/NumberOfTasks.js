import AsyncStorage from '@react-native-async-storage/async-storage';

let numOfDoneTasks;
let numOfUndoneTasks;

const getTasks = () => {
  AsyncStorage.getItem('Tasks')
    .then(tasks => {
      const allTasks = JSON.parse(tasks);
      numOfUndoneTasks = allTasks.filter(task => task.Done === false).length;
      numOfDoneTasks = allTasks.filter(task => task.Done === true).length;
    })
    .catch(error => console.log(error));

  return [numOfUndoneTasks, numOfDoneTasks];
};

export default getTasks;
