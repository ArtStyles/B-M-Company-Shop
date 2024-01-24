import './index.css';
import FilterIcon from "../../../assets/oferts-magnament-filter.svg";
import AddIcon from "../../../assets/oferts-magnament-add.svg";
import DeleteIcon from "../../../assets/oferts-magnament-delete.svg";
import SearchIcon from "../../../assets/search-icon.svg";

import { ToggleButton } from 'primereact/togglebutton';

        
const options = [<i className='pi pi-table'></i>, <i className='pi pi-list'></i>]

function SearchOferts({
  setSearch,
  handleOnClickCreateButton,
  selectedOferts,
  confirmAll,
  show,
  handelOnChangeView,
  responsive,
  search,
  viewMode
}) {
  return (
    <search
      title="Sección de búsqueda"
      className={
        responsive
          ? "search-oferts-container -wrap600px"
          : "search-oferts-container"
      }
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        className="search-oferts-form"
      >
        <img src={SearchIcon} width={"16px"} />
        <input
          placeholder="Buscar"
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <ToggleButton
        className="input-switch-oferts"
        checked={viewMode == "grid"} 
        onChange={handelOnChangeView}
        onIcon = "pi pi-table"
        offIcon = "pi pi-list"
        onLabel=''
      />

      <button className="search-oferts-button">
        <img src={FilterIcon} alt="filter" width={"12px"} />
        <p>Filtros</p>
      </button>

      <button
        className="search-oferts-button"
        onClick={handleOnClickCreateButton}
      >
        <img src={AddIcon} alt="add" width={"13px"} />
        <p>Agregar</p>
      </button>

      <button
        className="search-oferts-button"
        onClick={() => {
          if (selectedOferts.length > 0) confirmAll(selectedOferts);
          else show("Debe seleccionar almenos un elemento", "warn");
        }}
      >
        <img src={DeleteIcon} alt="delete" width={"13px"} />
        <p>Eliminar</p>
      </button>
    </search>
  );
}

export default SearchOferts;
