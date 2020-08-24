import React from 'react';

export default function TodoBanner(props) {

    const {userName, todoItems} = props;

        return (
            <h4 className="bg-primary text-white text-center p-2">
                {userName}'s To Do List
                    ({ todoItems.filter(t => !t.done).length} items to do)
            </h4>)
};