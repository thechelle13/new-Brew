import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

// document.addEventListener(
//     "click",  
//     (clickEvent) => {
        
//         const itemClicked = clickEvent.target
//         if (itemClicked.dataset.type === "employee") {
//             let counter = 0
//             const employeeId = itemClicked.dataset.id
//             const employeeName = itemClicked.dataset.name
//                 for (const order of orders) {
//                     if (order.employeeId === parseInt(employeeId)) {
//                        counter++
//                  }
//                  }       
//                     window.alert(`${employeeName} sold ${counter} products.`)
//                     }
//                 }
//         
//     
// )

export const Employees = () => {
    let html = "<ul>"
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
    html += "</ul>"
    
    return html
}


document.addEventListener(
    "click",  
    (clickEvent) => {   
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            let [, primaryKey] = itemClicked.id.split("--")

                    let matchingEmployee = null
                        for (const employee of employees) {
                            if (employee.id === parseInt(primaryKey)) {                              
                                matchingEmployee = employee
                            }
                        }

                    let matchingOrder = null
                        for (const order of orders) {
                            if (order.employeeId === matchingEmployee.id) {            
                                matchingOrder = order
                            }
                        }
            window.alert(`${matchingEmployee.name} sold ${matchingOrder.employeeId} products.`)
        }
    } 
)