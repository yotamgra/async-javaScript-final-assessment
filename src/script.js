// DON'T EDIT THOSE LINES
const dataURLBase = "https://docs.google.com/spreadsheets/d/";
const dataURLEnd = "/gviz/tq?tqx=out:json&tq&gid=";
const id = "1C1-em4w0yHmd2N7__9cCSFzxBEf_8r74hQJBsR6qWnE";
const gids = ["0", "1574569648", "1605451198"];
// END OF DATA SETUP

// TODO your code here

const GetEmployeesData = async (i) => {
  const featchNames = await fetch(dataURLBase + id + dataURLEnd + gids[i]);
  const data = await featchNames.text();
  const stringToDelete = "/*O_o*/\ngoogle.visualization.Query.setResponse(";
  return JSON.parse(data.slice(stringToDelete.length, -2));
};
GetEmployeesData().then((data) => {
  console.log(data);
  const names = data.table.rows;
  console.log(names);
 
});

var $table = $("#employees");

$table.bootstrapTable({
  columns: [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "Item Name",
      field: "name",
    },
    {
      title: "Item Price",
      field: "price",
    },
  ],
  data:[
    {
      'id': 0,
      'name': 'Item 0',
      'price': '$0'
    },
    {
      'id': 1,
      'name': 'Item 1',
      'price': '$1'
    },
    {
      'id': 2,
      'name': 'Item 2',
      'price': '$2'
    },
    {
      'id': 3,
      'name': 'Item 3',
      'price': '$3'
    },
    {
      'id': 4,
      'name': 'Item 4',
      'price': '$4'
    },
    {
      'id': 5,
      'name': 'Item 5',
      'price': '$5'
    }
  ]
});

console.log("change");
console.log("change");

