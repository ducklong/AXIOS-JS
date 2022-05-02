function Services() {
  this.fetchData = function () {
    return axios({
      url: "https://626d52bb5267c14d5679e1da.mockapi.io/axios",
      method: "GET",
    });
  };
  // xoa
  this.deleteClient = function (id) {
    return axios({
      url: `https://626d52bb5267c14d5679e1da.mockapi.io/axios/${id}`,
      method: "DELETE",
    });
  };
  // them
  this.addClient = function (client) {
    return axios({
      url: "https://626d52bb5267c14d5679e1da.mockapi.io/axios",
      method: "POST",
      data: client,
    });
  };
  // lay thong tin
  this.getClientbyID = function (id) {
    return axios({
      url: `https://626d52bb5267c14d5679e1da.mockapi.io/axios/${id}`,
      method: "GET",
    });
  };
  // update
  this.updateClient = function (client) {
    return axios({
      url: `https://626d52bb5267c14d5679e1da.mockapi.io/axios/${client.id}`,
      method: "PUT",
      data: client,
    });
  };
}
