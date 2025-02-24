'use client';

import { Row, Select } from 'antd';
import bodyStyles from '@/styles/modules/body.module.css';
import BaseImage from '@/components/HOC/image';
import dropdown from '@/assets/icon/dropdown.svg';

interface IGroupSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
}

export const GroupSelect: React.FC<IGroupSelectProps> = ({
  label,
  onChange,
  options,
  value,
  defaultValue,
}) => {
  return (
    <Row className={bodyStyles['group-select']}>
      {label ? (
        <Row className={bodyStyles['group-select-label']}>{label}</Row>
      ) : (
        <></>
      )}
      <Row>
        <Select
          defaultValue={defaultValue}
          value={value}
          className={bodyStyles['group-select-input']}
          onChange={onChange}
          options={options}
          suffixIcon={
            <BaseImage
              style={{ width: 12, height: 12, marginRight: 6 }}
              src={dropdown}
              alt="dropdown icon"
            />
          }
        />
      </Row>
    </Row>
  );
};
