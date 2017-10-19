import React from 'react';
import {
  Dropdown,
  DropdownContent,
  Icon,
  Menu,
  MenuItem,
  MenuLink,
} from 'react-mako';

const Year = (props) => {
  const {
    selectYear,
    year,
    years,
  } = props;

  return (
    <div style={{ padding: '1.5rem 0' }}>
      <Dropdown>
        {(closeDropdown, openDropdown, isOpen) => (
          <div style={{ position: 'relative', textAlign: 'right' }}>
            <strong key="year-toggle">
              <a
                href="#select-year"
                onClick={(event) => {
                  event.preventDefault();
                  isOpen ? closeDropdown() : openDropdown();
                }}
              >
                {year ? year : 'Select Year'} <Icon name="downArrow" />
              </a>
            </strong>

            <DropdownContent
              bottom
              closeDropdown={closeDropdown}
              isOpen={isOpen}
              key="year-list"
              left={false}
              right
            >
              <Menu>
                {years.map(yr => (
                  <MenuItem key={yr}>
                    <MenuLink
                      onClick={() => {
                        closeDropdown();
                        selectYear(yr);
                      }}
                    >
                      {yr === year
                        ? (
                          <span style={{ color: '#57CC86' }}>
                            <Icon name="check" /> {yr}
                          </span>
                        )
                        : yr
                      }
                    </MenuLink>
                  </MenuItem>
                ))}
              </Menu>
            </DropdownContent>
          </div>
        )}
      </Dropdown>
    </div>
  );
};

export default Year;
