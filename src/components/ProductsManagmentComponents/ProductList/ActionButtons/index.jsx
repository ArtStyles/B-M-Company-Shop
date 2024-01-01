import './index.css'
import TrashIcon from '../../../../assets/trash-icon.svg'
import EyeIcon from '../../../../assets/eye-icon.svg'
import EditIcon from '../../../../assets/edit-icon.svg'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react'

function ActionButtons({product, handleDeleteProduct}) {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)

    return ( 
        <section className = "action-buttons-container">
            <ConfirmDialog 
                visible={showConfirmDialog} 
                onHide={() => setShowConfirmDialog(false)} 
                acceptClassName='p-button-danger'
                acceptLabel='Aceptar'
                rejectLabel='Cancelar'
                message="Deseas continuar con la operación?" 
                header="Confirmación" 
                icon="pi pi-exclamation-triangle" 
                accept={() => handleDeleteProduct(product.id)} 
                />
            <button className = "btn-general-styles"><img src = {EditIcon}/></button>
            <button className = "btn-general-styles"><img src = {EyeIcon}/></button>
            <button className = "btn-general-styles" onClick={() => setShowConfirmDialog(true)}><img src = {TrashIcon}/></button>
        </section>
     );
}

export default ActionButtons;