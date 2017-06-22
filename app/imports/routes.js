// JSX files have to import react

import React from "react";
// Import react mounter instead of react-layout (npm)
import { mount } from "react-mounter";

// Import components and scenes used by the router
import App from "/imports/components/App/index";
import Home from "/imports/scenes/Home/index";

// Group public routes
const router = FlowRouter.group({});

// Define index route
router.route("/", {
  name: "index",
  action() {
    DocHead.setTitle('Seedbloom — Seeding the decentralised economy')
    // Mount the App parent component and the Counter component as a child
    mount(App, { children: <Home /> });
  }
});
