import os
os.environ["CREWAI_TELEMETRY_OPT_OUT"] = "true"

import streamlit as st
from dotenv import load_dotenv

load_dotenv()

from agents import run_research

import os



# Set up page configuration

st.set_page_config(page_title="🔍 Agentic Deep Researcher", layout="wide")



# Initialize session state variables

if "linkup_api_key" not in st.session_state:
    st.session_state.linkup_api_key = os.getenv("LINKUP_API_KEY", "")

if "openrouter_api_key" not in st.session_state:
    st.session_state.openrouter_api_key = os.getenv("OPENROUTER_API_KEY", "")

if "messages" not in st.session_state:

    st.session_state.messages = []



def reset_chat():

    st.session_state.messages = []



# Sidebar: Linkup Configuration with updated logo link

with st.sidebar:

    col1, col2 = st.columns([1, 3])

    with col1:

        st.write("")

        st.image(

            "https://avatars.githubusercontent.com/u/175112039?s=200&v=4", width=65)

    with col2:

        st.header("API Configuration")

        st.write("Configure your API keys")



    st.markdown("### Linkup API")

    st.markdown("[Get your Linkup API key](https://app.linkup.so/sign-up)",

                unsafe_allow_html=True)



    linkup_api_key = st.text_input(

        "Enter your Linkup API Key",
        type="password",
        key="linkup_key",
        value=st.session_state.linkup_api_key
    )

    if linkup_api_key:

        st.session_state.linkup_api_key = linkup_api_key

        # Update the environment variable

        os.environ["LINKUP_API_KEY"] = linkup_api_key

        st.success("Linkup API Key stored!")

    

    st.markdown("---")

    st.markdown("### OpenRouter API")

    st.markdown("[Get your OpenRouter API key](https://openrouter.ai/keys)",

                unsafe_allow_html=True)



    openrouter_api_key = st.text_input(

        "Enter your OpenRouter API Key",
        type="password",
        key="openrouter_key",
        value=st.session_state.openrouter_api_key
    )

    if openrouter_api_key:

        st.session_state.openrouter_api_key = openrouter_api_key

        # Update the environment variable

        os.environ["OPENROUTER_API_KEY"] = openrouter_api_key

        st.success("OpenRouter API Key stored!")



# Main Chat Interface Header with powered by logos from original code links

col1, col2 = st.columns([6, 1])

with col1:

    st.markdown("<h2 style='color: #0066cc;'>🔍 Agentic Deep Researcher</h2>",

                unsafe_allow_html=True)

    powered_by_html = """<div style='display: flex; align-items: center; gap: 10px; margin-top: 5px;'><span style='font-size: 20px; color: #666;'>Powered by</span><img src="https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66d07240057721394308addd_Logo%20(1).svg" width="80" /><span style='font-size: 20px; color: #666;'>and</span><img src="https://framerusercontent.com/images/wLLGrlJoyqYr9WvgZwzlw91A8U.png?scale-down-to=512" width="100" /></div>"""
    
    st.markdown(powered_by_html, unsafe_allow_html=True)

with col2:

    st.button("Clear ↺", on_click=reset_chat)



# Add spacing between header and chat history

st.markdown("<div style='height: 30px;'></div>", unsafe_allow_html=True)



# Display chat history

for message in st.session_state.messages:

    with st.chat_message(message["role"]):

        st.markdown(message["content"])



# Accept user input and process the research query

if prompt := st.chat_input("Ask a research question..."):

    st.session_state.messages.append({"role": "user", "content": prompt})

    with st.chat_message("user"):

        st.markdown(prompt)



    if not st.session_state.linkup_api_key:

        response = "Please enter your Linkup API Key in the sidebar."

    elif not st.session_state.openrouter_api_key:

        response = "Please enter your OpenRouter API Key in the sidebar."

    else:

        with st.spinner("Researching... This may take a moment..."):

            try:

                result = run_research(prompt)

                response = result

            except Exception as e:

                response = f"An error occurred: {str(e)}"



    with st.chat_message("assistant"):

        st.markdown(response)

    st.session_state.messages.append(

        {"role": "assistant", "content": response})

