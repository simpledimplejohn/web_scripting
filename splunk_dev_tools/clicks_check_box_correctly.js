// this script works from inside the all configurations page once logged in 
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch
// this does not have a loop
// uses aria-label to find the button


// OKAY the issue is this is the only code that will actually ckick the button
// but it does not do the array correctly and its messy 

const nameArr = ['Another Alert', 'Customer alert', 'Errors', 'Still Another Alert']


let name_link = `[aria-label*="${encodeURIComponent(nameArr[0])}"]`
console.log(nameArr[0])

async function performActions() {
    const waitFor = (selector) => new Promise(resolve => {
      const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(interval);
          resolve(element);
        }
      }, 100);
    });
  
    const clickAndWait = async (selector) => {
      const element = await waitFor(selector);
      element.click();
    };
   
    await clickAndWait(name_link); 
    console.log('Actions completed.');
  }
  performActions();


  /*
  <a href="#" id="control-view7056" data-name="/servicesNS/nobody/John/saved/searches/Customer%20alert" class="btn"
    aria-label="/servicesNS/nobody/John/saved/searches/Customer%20alert" role="checkbox" aria-checked="false"><i
        class="icon-check" style="display:none"></i></a>

*/
// Now I need to loop through the nameArr array and perform the same action for each item in the array