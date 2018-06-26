package com.cfl.jd;

import com.cfl.interceptor.MyInterceptor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@ComponentScan(basePackages="com.cfl.controller")
@EnableAutoConfiguration
public class Application extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(myInterceptor()).addPathPatterns("/*").excludePathPatterns("/hello");
    }

    @Bean
    public MyInterceptor myInterceptor(){
        return new MyInterceptor();
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
