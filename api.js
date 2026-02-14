export const getEvents = () => {

return new Promise(resolve => {

setTimeout(() => {

resolve([
                {title:"Hackathon", seats:30},
                    {title:"AI Workshop", seats:25},
                    {title:"Coding Contest", seats:40}
                ]);

},2000);

});

};
