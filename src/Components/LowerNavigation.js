import React from 'react'
import { Button } from './Button'
import './LowerNavigation.css'

function LowerNavigation() {
    return (
        <>
            <div className='button-container'>
                <div className='button-row button-flr-1'>
                    <Button
                        type='button'
                        buttonSize='btn-small'
                        buttonStyle="btn--outline"
                        location='/floor-1'>
                        Floor 1
                            </Button>
                </div>
                <div className='button-row button-flr-2'>
                    <Button
                        type='button'
                        buttonSize='btn-small'
                        buttonStyle="btn--outline"
                        location='/floor-2'>
                        Floor 2
                            </Button>
                </div>
                <div className='button-row button-flr-3'>
                    <Button
                        type='button'
                        buttonSize='btn-small'
                        buttonStyle="btn--outline"
                        location='/floor-3'>
                        Floor 3
                            </Button>
                </div>
                <div className='button-row button-flr-4'>
                    <Button
                        type='button'
                        buttonSize='btn-small'
                        buttonStyle="btn--outline"
                        location='/floor-4'>
                        Floor 4
                            </Button>
                </div>
                <div className='button-row button-flr-ll'>
                    <Button
                        type='button'
                        buttonSize='btn-small'
                        buttonStyle="btn--outline"
                        location='/floor-ll'>
                        Floor LL
                            </Button>
                </div>
            </div>
        </>
    )
}

export default LowerNavigation
