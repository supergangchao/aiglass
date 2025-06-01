import React from 'react';
import PaymentList from './PaymentList';

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h2>支付管理</h2>
      <PaymentList />
    </div>
  );
};

export default PaymentPage;