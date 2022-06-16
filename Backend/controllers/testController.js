import asyncHandler from 'express-async-handler';
const items = [
  { link: 1, name: "test1", summary: "Summary Test 1", year: "2001", country: "us", price: "1000", description: "Desc 1" },
  { link: 2, name: "test2", summary: "Summary Test 2", year: "2002", country: "uk", price: "2000", description: "Desc 2" },
  { link: 3, name: "test3", summary: "Summary Test 3", year: "2003", country: "cz", price: "3000", description: "Desc 3" },
];

const getMockedData = asyncHandler(async (req, res) => {
  if (items && items.length) {
    res.status(201).json({ response: items });
  } else {
    res.json("Error: No Items Found");
  }
});

export {
  getMockedData,
};
