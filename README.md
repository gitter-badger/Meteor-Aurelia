# Meteor-Aurelia

[![Join the chat at https://gitter.im/Markusxmr/Meteor-Aurelia](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Markusxmr/Meteor-Aurelia?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Aurelia package for Meteor integration

## Structure
The index.html should contain:

<div aurelia-app>

</div>

<script>
  System.import("aurelia-bootstrapper");
</script>


Usually the aurelia-app attribute goes on the body, but meteor does not like that.
But it works anywhere as with most frameworks.

When Aurelia bootstrapps, by convention, it goes looking for a app module, app.html and app.js.
In this case went with app.au.html and app.au.ts.
Out of convinience, for now I use the netanelgilad:angular2-typescript package for the typescript compiler.
