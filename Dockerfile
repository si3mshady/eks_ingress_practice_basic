# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
RUN npm i
# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]

# $ eksctl utils associate-iam-oidc-provider --region=us-east-1 --cluster=elliotteks --approve

# eksctl create iamserviceaccount \
#   --cluster=elliotteks \
#   --namespace=kube-system \
#   --name=aws-load-balancer-controller \
#   --role-name "AmazonEKSLoadBalancerControllerRole" \
#   --attach-policy-arn=arn:aws:iam::780988366548:policy/AWSLoadBalancerControllerIAMPolicy \
#   --approve

#   helm upgrade aws-load-balancer-controller eks/aws-load-balancer-controller \
#   -n kube-system \
#   --set clusterName=elliotteks \
#   --set serviceAccount.create=false \
#   --set serviceAccount.name=aws-load-balancer-controller \
#   --set region=us-east-1\
#   --set vpcId=vpc-0737dd2cdac3788f2 \
#   --set image.repository=602401143452.dkr.ecr.us-east-1.amazonaws.com/amazon/aws-load-balancer-controller


# eksctl delete nodegroup --cluster=elliotteks--name=elliotts-eks-workernodes
