# commerceiq
## Assignment
### Prerequisites
1. install minikube and kubectl
2. install helm
### Task1: Create a web application that prints Good Morning/Noon/Evening depending on the current time.
**Solution:** The web app is a simple express app. You can find the application code in the directory timeiq. The directory also includes the required
Dockerfile so that the app can run in a container.
### Task2: All operations in this question should be performed in a custom namespace on minikube. 
**Solution:** For this we will create to namespace namely beta and production. The commands used are as follows:

``` kubectl create namespace beta ```

``` kubectl create namespace production ```
### Task3: Create a helm chart to deploy this application. 
**Solution:** The helm chart is present in the directory time-wishes.
### Task4: The application should have 1 replica running on beta and 2 replicas in production.
**Solution:** For this just install the helm chart with replicaCount=2 in production.

``` helm install --namespace production time-wishes . --set replicaCount=2 ```

``` helm install --namespace beta time-wishes . ```
### Task5: The application service should be accessible via localhost(browser). 
**Solution:** The helm chart also created a NodePort service. Find the node port and use minikube ip to open the web app in your browser.
To find the node port: ``` kubectl get service/time-wishes ```
Find the port under the PORT(S) tab. Then find the minikube ip using: ``` minikube ip ```
### Task6: All pods should have the label app=ciq and should have health checks configured. 
### Ensure the application does not cross memory usage of 4GB and 2 CPU on the production environment.
**Solution:** Liveliness probe, rediness probe and label app=ciq are set in the deployement.yaml file of helm chart.
You can check for the label and health checks by describing the pods too. The resource limits are set in the values.yaml file of helm chart.
