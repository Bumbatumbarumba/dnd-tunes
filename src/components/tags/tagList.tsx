import React from "react";
import { Tag } from "../../definitions";

interface TagListProps {
    tagList: string[] | Tag[];
}

export const TagList = (props: TagListProps) => {
    const { tagList } = props;
    const simpleList = typeof tagList[0] == "string";

    const pickFromColourList = () => {
        const colourList = ["#70117b", "#a50e43", "#1b8c64", "#6895d0", "#e2d45a"];
        const ind = Math.floor(Math.random() * colourList.length);
        return colourList[ind];
    };

    return (
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", marginBottom: "0.5em" }}>
            {tagList.map((tag: any, index: number) => {
                const tagColour = pickFromColourList();
                return <li key={index}>
                    <div style={{ color: tagColour, border: "solid", borderColor: tagColour, borderRadius: "1em", fontSize: "0.6em", margin: "2px", padding: "4px" }}>
                        {simpleList ? tag : tag.tagName}
                    </div>
                </li>;
            })}
        </ul>
    );
};