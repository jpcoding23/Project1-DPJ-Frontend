import React from 'react'
import { ITransaction } from '../../models/ITransaction'

export default function TransferForm() {
  return (
    <div>
        <div className="input-group-text">
        
        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
        </div>
        
        <input type="text" className="form-control" aria-label="Text input with checkbox" />
        

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" /> 
        </div>

        

      
    </div>
  )
}
