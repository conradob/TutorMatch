import React, { useState } from 'react';
import Router from 'next/router';
import fetch from '../lib/api';
import TutorForm from './TutorForm';

export default props => {
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({
    name: '',
    description: '',
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <TutorForm
      title={'Add new Tutor'}
      loading={loading}
      form={form}
      updateField={updateField}
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);

        await fetch({
          url: '/add',
          method: 'post',
          payload: form,
        });

        setLoading(false);
        Router.push({ pathname: '/' });
      }}
    />
  );
};
