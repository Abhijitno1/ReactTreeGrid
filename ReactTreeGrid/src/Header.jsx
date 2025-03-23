
export default (props) => {
    var headerClass = props.headerClass ? props.headerClass : 'table-primary'

    return <thead>
        <tr className={headerClass}>
            {props.items.map((elem, i) => {
                if (elem === 'children') {
                    return null
                }

                return <th key={`header_${i}`} style={{ width: props.columnsWidth[i] }}>{elem}</th>
            })}

        </tr>
    </thead>
}