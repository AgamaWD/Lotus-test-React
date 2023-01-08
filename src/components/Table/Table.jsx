import React from 'react'
import './Table.css'
import TableRow from '../TableRow/TableRow'

export default function Table() {
  return (
        <div className='table'>
        <p className="table__title">Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</p>
        <div className="table-header">
            <TableRow 
                class="table-header__row" 
                title="ХОД" 
                values={[]}
            />
            <TableRow 
                class="table-header__row" 
                title="ПАРАМЕТРЫ И ТРЕБОВАНИЯ" 
                values={['УЧАСТНИК №1', 'УЧАСТНИК №2', 'УЧАСТНИК №3', 'УЧАСТНИК №4']}
            />
        </div>
        <div className="table-body">
            <TableRow 
                class="table-body__row" 
                title="Наличие комплекса мероприятий, повышающих стандарты качества изготовления" 
                values={['-', '-', '-', '-']}
            />
            <TableRow 
                class="table-body__row" 
                title="Срок изготовления лота, дней" 
                values={['80', '90', '75', '120']}
            />
            <TableRow 
                class="table-body__row" 
                title="Гарантийные обязательства, мес" 
                values={['24', '24', '22', '36']}
            />
            <TableRow 
                class="table-body__row" 
                title="Условия оплаты" 
                values={['30%', '100%', '60%', '50%']}
            />
            <TableRow 
                class="table-body__row" 
                title="стоимость изготовления лота, руб (без НДС)" 
                values={['3,700,000 руб. -25,000 руб. 2,475,000 руб.', '3,200,000 руб. -25,000 руб. 2,475,000 руб.', '2,800,000 руб. -25,000 руб. 2,475,000 руб.', '2,500,000 руб. -25,000 руб. 2,475,000 руб.']}
            />
        </div>
        <div className="table__footer">Действия:</div>
        </div>
  )
}
