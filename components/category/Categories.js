import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Accordion,
  dataArray
} from 'native-base';

const dataIncome = [
  {title: 'Income', content: 'here we have included some categories of Income'},
];

const dataExpenses = [
  {title: 'Expences', content: 'here we have included some categories of Expences'},
];

export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./categories.png')} style={styles.image} />
    ),
  };
  render() {
    return (
      <Container style={{padding:10}}>
  
        <Content>
        <Accordion dataArray={dataIncome} expanded={0} />
          <Card>
            <CardItem>
              <Icon active name="trophy" />
              <Text>Awards</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="gift" />
              <Text>Gifts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="pulse" />
              <Text>Interest Money</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="card" />
              <Text>Salaray </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Icon active name="briefcase" />
              <Text>Selling</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="share-alt" />
              <Text>Other</Text>
            </CardItem>
          </Card>

          <Accordion dataArray={dataExpenses} expanded={0} />

          <Card>
            <CardItem>
              <Icon active name="paper" />
              <Text>Bills and Utilities</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="battery-charging" />
              <Text>Elctricity</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="beaker" />
              <Text>Gas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-google" />
              <Text>Internet</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="call" />
              <Text>Phone</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="filing" />
              <Text>Rentals</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="water" />
              <Text>Water</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="business" />
              <Text>Business</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="school" />
              <Text>Education</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="musical-notes" />
              <Text>Entertainment</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="videocam" />
              <Text>Movies</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="people" />
              <Text>Family</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="body" />
              <Text>Children and Babies</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="home" />
              <Text>Home Improvement/Services</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="pricetag" />
              <Text>Fees and Charges</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="pizza" />
              <Text>Food and Beverage</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="restaurant" />
              <Text>Restaurants</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="heart" />
              <Text>Friends and Lover</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="gift" />
              <Text>Gifts and Donations</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="person-add" />
              <Text>Charity</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="heart-dislike" />
              <Text>Funeral</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="heart-half" />
              <Text>Marriage</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="medkit" />
              <Text>Health and Fitness</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="person" />
              <Text>Personal Care</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="football" />
              <Text>Sports</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="list-box" />
              <Text>Insuarances</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="trending-up" />
              <Text>Investments</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="cart" />
              <Text>Shopping</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="link" />
              <Text>Accessories</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="shirt" />
              <Text>Clothing</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="bulb" />
              <Text>Electronics</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="train" />
              <Text>Transportation</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="hammer" />
              <Text>Maintenance</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="close-circle" />
              <Text>Parking Fees</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="flame" />
              <Text>Petrol</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="car" />
              <Text>Taxi</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="airplane" />
              <Text>Travel</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="wallet" />
              <Text>Withdrawal</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="share-alt" />
              <Text>Others</Text>
            </CardItem>
          </Card>
  
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
