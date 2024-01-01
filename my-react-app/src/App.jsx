import List from "./List.jsx";

function App() {
  
    const fruits = [{id: 1, name: "apple",  calories: 95  },
                    {id: 2, name: "banana", calories: 105 }, 
                    {id: 3, name: "orange", calories: 45  }, 
                    {id: 4, name: "peach",  calories: 35  }, 
                    {id: 5, name: "jucie",  calories: 65  }, 
                    {id: 6, name: "sprite", calories: 5   }, 
                    {id: 7, name: "eggs",   calories: 195 }, 
                    {id: 8, name: "lights", calories: 185 }];

    const guys = [{id: 1, name: "DLew",   calories: 95   },
                  {id: 2, name: "T",      calories: 105  }, 
                  {id: 3, name: "Alex",   calories: 45   }, 
                  {id: 4, name: "Larry",  calories: 35   }, 
                  {id: 5, name: "Jayce",  calories: 65   }];


    

    return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {guys.length > 0 && <List items={guys} category="Da Guys"/>}
    </>   
    );
}

export default App
