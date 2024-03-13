
export const getAmenitiesFilters = (accommodations) => {
  const amenitiesKeysArray = [];

  accommodations.forEach(accommodation => {
    const amenitiesKeys = Object.keys(accommodation.amenities);
    amenitiesKeys.forEach(key => {
      const keyExists = amenitiesKeysArray.some(item => item.key === key);
      if (!keyExists) {
        amenitiesKeysArray[key] = false;
      }
    });
  });

  return amenitiesKeysArray;
};

export const camelCaseToTitleCase = (camelCaseString) => {
  const separatedWords = camelCaseString.replace(/([A-Z])/g, ' $1');
  return separatedWords.charAt(0).toUpperCase() + separatedWords.slice(1);
}