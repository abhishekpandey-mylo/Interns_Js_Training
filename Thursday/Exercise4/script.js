const input = document.querySelector("#q");

    const status = document.querySelector("#status");

    const results = document.querySelector("#results");

    let controller;

    function debounce(callback, delay = 500) {

      let timeoutId;

      return (...args) => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          callback(...args);
        }, delay);
      };
    }

    async function searchUsers(query) {

      if (controller) {
        controller.abort();
      }

      controller = new AbortController();

      if (!query.trim()) {

        results.replaceChildren();

        status.textContent = "";

        return;
      }

      status.textContent = "Loading...";

      try {

        const response = await fetch(
          `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=100`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const items = data.items.map(user => {

          const li = document.createElement("li");

          const img = document.createElement("img");

          img.src = user.avatar_url;

          li.append(
            img,
            document.createTextNode(user.login)
          );

          return li;
        });

        results.replaceChildren(...items);

        status.textContent = data.items.length
          ? `${data.items.length} results`
          : "No results";

      } catch (error) {

        if (error.name !== "AbortError") {

          status.textContent =
            "Error: " + error.message;
        }
      }
    }

    const debouncedSearch = debounce(searchUsers);

    input.addEventListener("input", (event) => {

      debouncedSearch(event.target.value);
    });