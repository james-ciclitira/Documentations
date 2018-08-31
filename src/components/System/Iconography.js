import React from 'react'
import SectionTitle from '../../components/Site/SectionTitle.js'

const Iconography = () => (
        <main id='Icongrapghy' className="ph3 ph5-ns mt6 ">
        <SectionTitle Number='06' Title='Iconography'/>
        <div className='w-50-ns w-100 dib'>
        <h1 className='primary fw4'>Iconography</h1>

        <h3 className='primary fw4 mt5'>Design principles</h3>

        <p className="f5 lh-copy measure primary">
       Shapes are bold and geometric.
       Symmetry and consistency of shapes give the icons a unique quality, while keeping them simple and bold.</p>
  
        <h3 className='primary fw4 mt5'>Corners and stroke</h3>
        <p className="f5 lh-copy measure primary">
        Consistent corner radiuses are key to unifying the overall system icon family. A 2dp corner radius is used on the silhouette form of the icon. Do not round the corners of strokes (shapes 2dp wide or less).
                Interior corners should be square. Do not round the corners of interior shapes.
          Consistent stroke weights are key to unifying the overall system icon family. Maintain a 2dp width for all stroke instances, including curves, angles, and both interior and exterior strokes.
        </p>

        </div>

        <div className='w-50-ns w-100 dib v-top mt6 pl5'>
        <img className='mr6 mt3' src='../img/icons/icon-1.svg'/>
        <img className='mt3' src='../img/icons/icon-2.svg'/>
        <img className='mr6 mt5' src='../img/icons/icon-3.svg'/>
        <img className='mt3' src='../img/icons/icon-4.svg'/>
        <img className='mr6 mt5' src='../img/icons/icon-5.svg'/>
        <img className='mt5' src='../img/icons/icon-6.svg'/>
        </div>

      </main>



)

export default Iconography
