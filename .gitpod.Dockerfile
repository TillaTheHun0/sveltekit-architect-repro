FROM gitpod/workspace-full

ARG AWS_CLI_V2_URL='https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip'

RUN curl "${AWS_CLI_V2_URL}" -o "awscliv2.zip" && \
  unzip awscliv2.zip && \
  sudo ./aws/install
