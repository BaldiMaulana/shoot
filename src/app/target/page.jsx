'use client';

import React, { useState } from "react";
import PageInput from "@/app/pages/page";

function Page() {
    const [name, setName] = useState('');

    const handleNameChange = (newName) => {
        setName(newName);
    }


    return (
        <div className="sm:grid justify-center items-center">
            <div>
                <PageInput onNameChange={handleNameChange}  />
            </div>
        </div>
    );
}

export default Page;
