// this script works from inside the all configurations page once logged in 
// http://localhost:8000/en-US/manager/launcher/bulkreassign?app=John&owner=&count=100&offset=0&search=&appOnly=true&sortDir=&sortKey=&orphaned=false&configType=savedsearch
// this works for a single item


const name = 'Customer alert'
let name_link = `[aria-label="/servicesNS/nobody/John/saved/searches/${encodeURIComponent(name)}"]`
console.log(name_link)
let name_link2 = "#control-view7060"
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
