import React, { useState } from "react";

const Add = (count, setCount) => {
	const handleclick = () => {
		setCount(count + 1);
	};

	return (
		<button className="addbtn" onClick={handleclick} value={count} onChange={(e) => setCount(e.target.value)}>
			Add
		</button>
	);
};

export default Add;
