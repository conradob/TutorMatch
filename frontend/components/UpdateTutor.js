import React, { useState } from 'react';
import Router from 'next/router';
import fetch from '../lib/api';
import TutorForm from './TutorForm';

export default ({ tutor: { id, name = '', description = '' } }) => {
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({ name, description });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <TutorForm
      title={`Update ${name}`}
      loading={loading}
      updateField={updateField}
      form={form}
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);

        await fetch({
          url: `/update/${id}`,
          method: 'put',
          payload: form,
        });

        setLoading(false);
        Router.push({ pathname: '/' });
      }}
    />
  );
};
