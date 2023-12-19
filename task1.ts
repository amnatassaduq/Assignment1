import inquirer from "inquirer"
import chalk from "chalk"
console.log("***************WELCOME***************") 
// Scenario 1- "Buying Groceries"
async function buyGroceries():Promise<number> {
 // Ask from coustomer if they want fruits or vegetable 
var input = await inquirer.prompt([
                                    {name:"choice",
                                    type:"list",
                                    message:"what you wants to buy:",
                                    choices:["fruit","vegetable"] 
                                    }
                                  ])
let bill =0
 if(input.choice==="fruit")
 {
    console.log(chalk.red("Available fruits are:\napple (RS100/kg)\nbanana (RS200/kg)\norange(Rs150)"))
// Ask for the fruit choice and quantity for each item
var fruitChoice = await inquirer.prompt([
                                        {name: "fruit",
                                         type: "list",
                                        message:"Enter the fruit you want to buy (lowercase):",
                                        choices:["apple (RS 100/kg)","banana (RS 200/kg)","oranges (RS 150/kg)"]
                                        },
                                        {name: "quantity",
                                         type: "number",
                                        message: "Enter the quantity(in kg)"
                                        }
                                        ])
   if(fruitChoice.fruit==="apple")
   {
    bill+=100*fruitChoice.quantity
   }
   else if(fruitChoice.fruit==="banana")
   {  
    bill+=200*fruitChoice.quantity
   }
   else(fruitChoice.fruit==="orange") 
   {
    bill+=150*fruitChoice.quantity
   }
 }
 if(input.choice==="vegetable")
 {
   {console.log("Availabe vegetables are :\n ptatoes    (RS 120/kg) \n ladyfinger (RS 160/kg) \n chilles      (RS 180/kg)")}
 var vegchoice=await inquirer.prompt([
                                    {name:"vegetable",
                                     type:"list",
                                     message:"Enter vegetable you want to buy:",
                                     choices:["ptatoes    (RS 110/kg)","ladyfinger (RS 160/Kg)","chilles    (RS 180/kg)"]   
                                    },
                                    {name:"quantity",
                                     type:"number",
                                     message:"Enter the quantity:"
                                    }
                                    ])
 if(vegchoice.vegetable==="ptatoes")
 {
  bill+=110*vegchoice.quantity
 }
 else if(vegchoice.vegetable==="ladyfinger")
 {
  bill+=160*vegchoice.quantity
 }
 else(vegchoice.vegetable==="chilles")
 { 
  bill+=180*vegchoice.quantity
 }
}
return bill
}

    //Scenerio 2 -Checking Discounts
function discount (bill:number)
{
   //if bill is above then RS300 apply the discount
 if(bill>300)
  {
  const discountPercentage=10
  const discountAmount=(discountPercentage/100)*bill
  const discountedBill=bill-discountAmount 
  console.log("Your bill is above then RS300")
  console.log(`Your bill after 10% discount :`)
  console.log(chalk.magenta(`${discountAmount}`))
  }
else
  {
  console.log("No discounts")
  }
}

 //Scenerio 3 -Checkout Process
 async function checkoutProcess()
{
  console.log("Welcome to the checkoutprocess")
  while(true)
  {
    var paymentMethod= await inquirer.prompt([
                                        {name:"choice1",
                                         type:"string",
                                         message:"choose a payment method(cash or card)"
                                        }
                                        ])
   if(paymentMethod.choice1==="cash"||"card")
   {
    break
   }
  else
  {
   console.log("Invalid mathod ")
  }
 }
 console.log(`You have choosen ${paymentMethod.choice1} as your payment method`)
 console.log("Payment sucessfull")
 console.log("Thanks for chossing us")
}
let bill= await buyGroceries()//calling functions
console.log(`your bill is ${bill}`)
discount(bill)
checkoutProcess()
 