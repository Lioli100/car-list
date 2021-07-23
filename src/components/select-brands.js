import React from "react";
import PropTypes from "prop-types";
import Select from "./select";
import useBrands from "../hooks/use-brands";

function SelectBrand({ value, onChange }) {
  const { brands } = useBrands();

  return (
    <Select
      value={value}
      onChange={(brandId) => {
        const selectBrand = brands.find((brand) => brand.id == brandId);
        onChange(selectBrand);
      }}
      options={brands.map((brand) => ({
        value: brand.id,
        label: brand.name,
      }))}
    />
  );
}

SelectBrand.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectBrand;
