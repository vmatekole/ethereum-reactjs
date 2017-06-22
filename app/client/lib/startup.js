Meteor.startup(()=> {
  const robotoFont = {rel: "stylesheet", type: "text/css", href: "//fonts.googleapis.com/css?family=Roboto:300,400,500,700'"};
  DocHead.addLink(robotoFont);
});
if (Meteor.isClient) {

}