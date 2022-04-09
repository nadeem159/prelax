import React from 'react'

const IPadd = () => {
  return (
    <div className='container'>
    <h3 className='d-flex justify-content-center'>IP ADD</h3>
    <form className='form-group' >
    <div className='row'>
        <div className='col col-6'>
    <label>IP</label>
    <input type="text" placeholder='IP ADDRESS' />
    </div>
    <div className='col col-6'>
    <label>Name</label>
    <input type="text" placeholder='User Name' />
    </div>
    </div>
    <div className='row'>
    <div className='col'>
       <h5>Department</h5>
       <div class="form-check col">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1" >
    Admin
  </label>
</div>
       <div class="form-check col">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1" >
   TL
  </label>
</div>
       <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1" >
    Android
  </label>
</div>
    </div>
    </div>
    </form>
    </div>
  )
}

export default IPadd