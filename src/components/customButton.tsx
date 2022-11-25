import React, { MouseEventHandler } from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { auth } from "../services";

export interface CustomButtonProps {
    primaryColour?: string;
    hoverColour?: string;
    onClickFunction: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
    style?: React.CSSProperties;
    buttonIsDisabled?: boolean;
}

export const CustomButton = (props: CustomButtonProps) => {
    const { primaryColour, hoverColour, onClickFunction, buttonText, style, buttonIsDisabled } = props;

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        ...style,
        color: buttonIsDisabled ? "rgba(0, 0, 0, 0.26)" : theme.palette.getContrastText(primaryColour || "#c84b31"),
        backgroundColor: buttonIsDisabled ? "rgba(0, 0, 0, 0.12)" : primaryColour || "#c84b31",
        '&:hover': {
            backgroundColor: hoverColour || "#9f1b00",
        },
    }));

    return (
        <ColorButton disabled={buttonIsDisabled} color="primary" sx={{ verticalAlign: "middle" }}
            onClick={onClickFunction}>
            {buttonText}
        </ColorButton>
    );
};