import Buttons from "../components/Buttons/Buttons";
import React from "react";
import '../components/Buttons/Buttons.css';

export default {
    title: "Buttons",
    component: Buttons
}

export const Primary = () => <Buttons variant= "primary" text="Primary"/>
export const Secondary = () => <Buttons variant="secondary" text="Secondary" />;
export const Success = () => <Buttons variant="success" text="Success" />;
export const Danger = () => <Buttons variant="danger" text="Danger" />;
