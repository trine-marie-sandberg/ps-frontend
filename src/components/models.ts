import React from "react";

export interface Props{
    Task: {
        title: string,
        descriptions: string,
        category: string,
        deadline: string,
        author: string,
        urls: [string],
        price: number,
    };
    setTask: React.Dispatch<React.SetStateAction<String>>;
    handleUpdate: () => void;
}

//https://www.youtube.com/watch?v=FJDVKeh7RJI 