// this script works from inside the all configurations page once logged in 
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch
// this works for a single item


const nameArr = ['Customer alert']


let name_link = `[aria-label*="${encodeURIComponent(nameArr[0])}"]`
console.log(name_link)
let name_link2 = "#control-view7056"
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


  <a href="#" id="control-view7056" data-name="/servicesNS/nobody/John/saved/searches/Customer%20alert" class="btn"
    aria-label="/servicesNS/nobody/John/saved/searches/Customer%20alert" role="checkbox" aria-checked="false"><i
        class="icon-check" style="display:none"></i></a>


// The above code works to select the checkbox for a single item in the all configurations page from the devtools console in chrome
// the problem is some of the fields in the link will change for each item
// I won't know the values for the following fields: nobody, John 
// for data-name="/servicesNS/nobody/John/saved/searches/Customer%20alert"