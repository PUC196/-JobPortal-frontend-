import { useState } from 'react';
import { Combobox, useCombobox, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevence', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort=()=> {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevence');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          
          <div onClick={()=>combobox.toggleDropdown()} className='border cursor-pointer border-bright-sun-400 flex gap-2 items-center rounded-xl px-2 py-1 text-sm'>
            {selectedItem} <ActionIcon color="bright-sun.4" variant="transparent" aria-label="settings"><IconAdjustments style={{ width:'70%', height: '70%' }} stroke={1.5}/>
            </ActionIcon>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;