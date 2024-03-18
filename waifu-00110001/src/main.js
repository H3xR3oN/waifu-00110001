export const getYourWaifu = () => {
  const waifus = ["Megumin", "Sarada Uchiha", "Sakura Miko"];

  return waifus[Math.floor(Math.random() * waifus.length)];
};
