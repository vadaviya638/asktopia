import React, { useState } from 'react'

export const SelectDemo = () => {
    const [value, setvalue]=useState('')

    var options=[
        {
            label:"VOLVO",
            value:"volovo"
        },
        {
            label:"BMW",
            value:"bmw"
        },
        {
            label:"AUDI",
            value:"audi"
        },
        {
            label:"NANO",
            value:"nano"
        }
    ]

    const selectchangeHandler=(e)=>{
        console.log(e.target.value)
        setvalue(e.target.value)
    }

    const genderchangeHandler=(e)=>{
        alert(e.target.value)
        console.log(e.target.value);
    }
const countryHandler=(e)=>{
    alert(e.target.value)
    
}
  return (
    <div>
        <form>
            <select onChange={(e)=>{selectchangeHandler(e)}}>
                {
                    options.map((option)=>{
                        return(<option value={option.value}>{option.label}</option>)
                    })
                }
            </select>
            <br/>
            <label>Male</label>
            <input type="radio" name="gender" value='male' onChange={(e)=>{genderchangeHandler(e)}} />
            <label>Female</label>
            <input type="radio" name="gender" value='female' onChange={(e)=>{genderchangeHandler(e)}} />
            <br/>
            <br/>
            <br/>
            <label>Ind</label>
            <input type="checkbox" value='ind'onChange={(e)=>{countryHandler(e)}} />
            <br/>
            <label>Pak</label>
            <input type="checkbox" value='pak' onChange={(e)=>{countryHandler(e)}}/>
            <br/>
            <label>Usa</label>
            <input type="checkbox" value='usa' onChange={(e)=>{countryHandler(e)}} />
        </form>
    </div>
  )
}
