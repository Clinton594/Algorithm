const sortUP = (data, key) => {
  data.sort((a, b) => {
    const nameA = a[key].toUpperCase(); // ignore upper and lowercase
    const nameB = b[key].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return data;
};

export const getGeneralTrainingsInfo = (state) => {
  let { trainings } = state.trainings;
  let data = [];
  for (const key in trainings) {
    const { id, name, level, employees } = trainings[key];
    data.push({ id, name, level, participants: employees.length });
  }
  data = sortUP(data, "name");
  return data;
};

export const getTrainingParticipantsInfo = (state, trainingID) => {
  // implementation here
  const training = state.trainings.trainings[trainingID];

  let employees = state.data.employees.filter((user) => training.employees.includes(user.id));
  employees = sortUP(employees, "lastName");
  employees = employees.map(({ id, firstName, lastName, position }) => ({
    id,
    name: `${firstName} ${lastName}`,
    position,
  }));
  return employees;
};

export const getTrainingSkillsInfo = (state, trainingID) => {
  // implementation here
  const training = state.trainings.trainings[trainingID];
  const { trainingSkills: skills, employees: teams } = training;
  const employees = state.data.employees.filter((user) => teams.includes(user.id));

  let data = {};
  for (const key in skills) {
    const skill = skills[key];
    const have = employees.filter((user) => user.skills.indexOf(skill) !== -1).length;
    data[skill] = { have, "not-have": employees.length - have };
  }
  return data;
};
