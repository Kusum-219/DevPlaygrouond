import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentScreen = () => {
  const handlePayment = () => {
    var options = {
      description:
        'Secure payment for your order of Dev_Test products and services. Thank you for choosing us!',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Dummy logo
      currency: 'INR',
      key: 'rzp_test_Nw0jNHZMwEuQAV',
      amount: '50000',
      name: 'Dev_Test',
      prefill: {
        email: 'dev@xyz.com',
        contact: '9999999999',
        name: 'Developer',
      },
      theme: {color: '#528FF0'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // Success callback
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // Failure callback
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/paymentImage.jpg')} // Payment related GIF
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Make Your Payment</Text>
      <Text style={styles.description}>
        Secure and quick payment options available.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Payment Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 20,
  },
  image: {
    width: 400,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F37254',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
