# OIP-6: SmartIns - Automatic agricultural insurance inferred from DL model on the blockchain

| Author   | AITEX                  |
| :------- | ---------------------- |
| Status   | Draft                  |
| Type     | Standard Track         |
| Category | Application            |
| Created  | June 21, 2020          |

## Introduction

Rainstorm or various types of strong convective weather have a major impact on society and people's safety. It is very difficult to capture the whereabouts and development of heavy rain, even in the next few hours. Can our metropolis add more wisdom and protect against the effects of heavy rain? If "artificial intelligence" is an agent, is it the righteous man who can support us against the torrential rainstorm?

To explore this problem, we use radar data to predict the time and place of short-term heavy rain. The model uses standard radar data (SRAD), which contains a large number of rain history examples with different intensity changes and different trajectories. Examples of heavy rain or potential for heavy rain development are also included.

In the data mining process, the most advanced machine learning and artificial intelligence technologies are used to establish "rain shields". Through deep excavation, careful analysis of rainfall movement, and enhanced or weakened laws of change, the "rain suspects" are identified by heavy rain. And classification. In addition to historical cases, the strongest "rain shield" must also be able to extract the traces of the unseen rain, and predict the changes in the next two or three hours (including precipitation intensity, location and time).

We uses Conv-LSTM based on this paper: [Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting](https://arxiv.org/abs/1506.04214)
read_radar: read radar data and save it to numpy format.
radar_forecast build the ConvLSTM network and train.
predict_and_draw draw the nowcasting results.

The data comes from IEEE ICDM 2018

The IEEE International Conference on Data Mining series (ICDM) has established itself as the world’s premier research conference in data mining. The conference covers all aspects of data mining, including algorithms, software and systems, and applications. ICDM draws researchers and application developers from a wide range of data mining related areas such as statistics, machine learning, pattern recognition, databases and data warehousing, data visualization, knowledge-based systems, and high performance computing. 


## Proposal

SmartIns is an automatic agricultural insurance inferred from DL model on the blockchain . Using OKChain, Machine Learning and Cloud Storage, we created an agricultural disaster insurance that uses the smart contract as insurance clause and AI inferential index as insurance basis. Using Blockchain and Machine Learning, the entire process of insurance from insurance to claims is objective and automatic, which breaks the trust paradox in agricultural insurance. Since all smart contract, model and data are stored on the cloud, the trained model can be used in many places.

### 1. Insurance contracts
Insurance contracts, including member management, rights management, insurance, status updates, automatic claims, multi-insurance multi-policy management.

### 2. ConvLSTM
Conv-LSTM based DL model, using the most advanced machine learning and artificial intelligence technologies to establish "rain shields".

## DEMO

- http://www.smart-ins.net/

## VIDEO
- https://youtu.be/9Dkkr8ZrSEs

## Source Code

- https://github.com/only4sim/AITEX/
